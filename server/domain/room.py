import sys
sys.path.append("..")
import glog as log
from game import Game
import uuid
import sys
from proto import splendor_pb2
class RoomManager(object):
  def __init__(self, app):
    self.app = app
    self.rooms = []
    self.rooms_map = {}

def list_rooms(self, dao):
  rooms_pb_str = dao.list_rooms()
  rooms = []
  for pb_str in rooms_pb_str:
    room = Room(self.app.logger)
    if room.init_from_pb(pb_str):
      rooms.append(room)
  return rooms

def get_room_info(self, dao, room_id):
  room = Room(self.app.logger)
  pb_room_str = dao.get_room(room_id)
  room.init_from_pb(pb_room_str)
  return room
class Room(object):
  def __init__(self, logger):
    self.logger = logger
    self.players = {}

  def init_room(self):
    self.room = splendor_pb2.Room()
    self.id = uuid.uuid4().hex
    self.game = Game(self.id, self.logger, self.room.game)

  def init_from_pb(self, pb_str):
    self.room = splendor_pb2.Room()
    self.room.ParseFromString(pb_str)
    self.game = Game(self.id, self.logger, self.room.game)

  def status(self):
    return self.game.game.status

  def get_room_info(self):
    return {
      "room_id": self.room.id,
      "game_info": self.game,
      "audience:": self.room.audience
    }
  
  def join_player(self, id, name):
    if len(id) < 10 or len(name) < 8:
      self.logger.error("id or name error join player error")
      return splendor_pb2.SYSTEM_ERROR
    p = self.game.join_game(id,name)
    if p is not None:
      self.players[p.id] = p

  def can_start_game(self):
    return self.game.can_start_game()

  def start_game(self):
    if self.can_start_game():
      self.game.game.state = splendor_pb2.STATE_READY_START
      return self.game.start_game()
    else:
      return splendor_pb2.GAME_NOT_READY

  def next_turn(self):
    cur_p = self.game.cur_player()
    if cur_p is not None and cur_p.score >= 15:
      self.is_last_round = True
    self.game.next_turn()
    cur_p = self.get_cur_player()
    if cur_p.is_active:
      return splendor_pb2.SUCCESS
    else:
      return splendor_pb2.PLAYER_NOT_VALID