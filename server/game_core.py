import random
import uuid
import time
from domain.game import Game
from domain.room import Room
from proto import splendor_pb2

'''
        result = {
            'players': [],
            'cards': {},
            'log': self.logs,
            'gems': self.gems,
            'nobles': array_dict(self.nobles),
            'decks': {},
            'winner': self.winner,
            'turn': self.active_player_index,
        }
'''

def new_create_game(app, room_manager, dao, room_id, uid):
  room = room_manager.get_room_info(room_id)
  if room is None:
    return splendor_pb2.ROOM_IS_INVALID, None
  elif uid == '0':
    return splendor_pb2.PLAYER_NOT_VALID, None
  room.game.state = splendor_pb2.STATE_READY_START
  return splendor_pb2.SUCCESS, room.game