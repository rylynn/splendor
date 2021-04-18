from flask_redis import FlaskRedis
from proto import splendor_pb2

ROOM_LIST_PRFIX = "s_roomlist"
ROOM_PRFIX = "s_room"
class SplendorDao(object):
  def __init__(self, app):
    self.redis_client = FlaskRedis(app)

  def room_list(self):
    pb_str_rooms = self.redis_client.lrange(ROOM_PRFIX, 0, -1)
    return pb_str_rooms

  def get_room(self, room_id):
    pb_str_room = self.redis_client.get(ROOM_PRFIX, room_id)
    return pb_str_room
class SplendorLocalDao(object):
  def __init__(self, app):
    self.room_db_map = {}
    self.game_db_map = {}
    self.room_db_list = []
    self.game_db_list = []
    self.app = app

  def add_room(self, room_id, room_pb_str):
    self.room_db_map[room_id] = room_pb_str
    self.room_db_list.append(room_id)

  def room_list(self):
    pb_str = []
    for room_id in self.room_db_list:
      if room_id in self.room_db_map:
        pb_str.append(self.room_db_map[room_id])
    return pb_str

  def get_room(self, room_id):
    pb_str_room = self.room_db_map[room_id]
    return pb_str_room