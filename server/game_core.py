import random
import uuid
import time
from domain.game import Game
from domain.room import Room
from proto import splendor_pb2

def list_rooms(app, dao):
  rooms_pb_str = dao.list_rooms()
  rooms = []
  for pb_str in rooms_pb_str:
    room = Room(app.logger)
    if room.init_from_pb(pb_str):
      rooms.append(room)
  return rooms

def get_room_info(app, dao, room_id):
  room = Room(app.logger)
  return