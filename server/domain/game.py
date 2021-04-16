import sys
sys.path.append("..")
from datetime import datetime
from cards import Card
import glog as log
from proto import splendor_pb2
import time
import random
import uuid

MAX_PLAYER_SIZE = 4

def GenerateGame():
  return uuid.uuid4().hex

class Game(object):
  def __init__(self, logger):
    self.logger = logger
    self.game = splendor_pb2.Game()
    cur_ts = int(time.time())
    self.game.id = GenerateGame()
    self.last_update_ts = cur_ts
  
  def join_game(self, player):
    if len(self.game.players) >= 4:
      self.logger.info('users are more than 4 players')
      return splendor_pb2.REACH_PLAER_LIMIT
    p = self.game.players.add()
    p = player

    if len(self.game.players) > 1:
      self.game.state = splendor_pb2.STATE_READY_START
      self.logger.info('game is ready to start')
    return splendor_pb2.SUCCESS

  def start_game(self):
    if self.game.state == splendor_pb2.STATE_READY_START:
      self.cur_player_id = self.game.players[0].id
      self.init_cards()
      self.init_nobles()
      self.init_desk()
      self.state = splendor_pb2.STATE_PLAYING
      self.logger.info('game start, player num:%d', len(self.game.players))
      return splendor_pb2.SUCCESS
    else:
      self.logger.info('game start error because state is wrong: %d', self.game.state)
      return splendor_pb2.SYSTEM_ERROR
  
  def get_color(color):
    if color == 'u':
      return splendor_pb2.SAPPHIRE
    elif color == 'w':
      return splendor_pb2.DIAMOND
    elif color == 'g':
      return splendor_pb2.EMERALD
    elif color == 'r':
      return splendor_pb2.RUBY
    elif color == 'b':
      return splendor_pb2.CHOCOLATE
    return splendor_pb2.DIAMOND

  def generate_pb_cards(self, card):
    card = self.desk.cards.add()
    card.id = card_cnt
    card_cnt += 1
    c_m = c.dict()
    card.value_gems.color = get_color(c_m['color'])
    card.value_gems.cost = 1
    card.score = c_m['points']
    for k,v in c.cost:
      gem = card.cost_gems.add()
      gem.color = get_color[k]
      gem.cost = v

  def init_desk(self):
    self.desk = splendor_pb2.Desk()
    card_cnt = 1
    for c in self.level_1_cards:
      self.generate_pb_cards(c)
    for c in self.level_2_cards:
      self.generate_pb_cards(c)
    for c in self.level_2_cards:
      self.generate_pb_cards(c)
 
  def init_cards(self):
    self.level_1_cards = [
            Card(1, 'b', 0, 1, 2, 1, 1, 0),
            Card(1, 'b', 0, 2, 2, 0, 1, 0),
            Card(1, 'b', 0, 0, 0, 1, 3, 1),
            Card(1, 'b', 0, 0, 0, 2, 1, 0),
            Card(1, 'b', 0, 2, 0, 2, 0, 0),
            Card(1, 'b', 0, 0, 0, 3, 0, 0),
            Card(1, 'b', 1, 0, 4, 0, 0, 0),
            Card(1, 'u', 0, 1, 0, 1, 1, 1),
            Card(1, 'u', 0, 1, 0, 1, 2, 1),
            Card(1, 'u', 0, 1, 0, 2, 2, 0),
            Card(1, 'u', 0, 0, 1, 3, 1, 0),
            Card(1, 'u', 0, 1, 0, 0, 0, 2),
            Card(1, 'u', 0, 0, 0, 2, 0, 2),
            Card(1, 'u', 0, 0, 0, 0, 0, 3),
            Card(1, 'u', 1, 0, 0, 0, 4, 0),
            Card(1, 'w', 0, 0, 1, 1, 1, 1),
            Card(1, 'w', 0, 0, 1, 2, 1, 1),
            Card(1, 'w', 0, 0, 2, 2, 0, 1),
            Card(1, 'w', 0, 3, 1, 0, 0, 1),
            Card(1, 'w', 0, 0, 0, 0, 2, 1),
            Card(1, 'w', 0, 0, 2, 0, 0, 2),
            Card(1, 'w', 0, 0, 3, 0, 0, 0),
            Card(1, 'w', 1, 0, 0, 4, 0, 0),
            Card(1, 'g', 0, 1, 1, 0, 1, 1),
            Card(1, 'g', 0, 1, 1, 0, 1, 2),
            Card(1, 'g', 0, 0, 1, 0, 2, 2),
            Card(1, 'g', 0, 1, 3, 1, 0, 0),
            Card(1, 'g', 0, 2, 1, 0, 0, 0),
            Card(1, 'g', 0, 0, 2, 0, 2, 0),
            Card(1, 'g', 0, 0, 0, 0, 3, 0),
            Card(1, 'g', 1, 0, 0, 0, 0, 4),
            Card(1, 'r', 0, 1, 1, 1, 0, 1),
            Card(1, 'r', 0, 2, 1, 1, 0, 1),
            Card(1, 'r', 0, 2, 0, 1, 0, 2),
            Card(1, 'r', 0, 1, 0, 0, 1, 3),
            Card(1, 'r', 0, 0, 2, 1, 0, 0),
            Card(1, 'r', 0, 2, 0, 0, 2, 0),
            Card(1, 'r', 0, 3, 0, 0, 0, 0),
            Card(1, 'r', 1, 4, 0, 0, 0, 0),
        ]
    self.level_2_cars = [
            Card(2, 'b', 1, 3, 2, 2, 0, 0),
            Card(2, 'b', 1, 3, 0, 3, 0, 2),
            Card(2, 'b', 2, 0, 1, 4, 2, 0),
            Card(2, 'b', 2, 0, 0, 5, 3, 0),
            Card(2, 'b', 2, 5, 0, 0, 0, 0),
            Card(2, 'b', 3, 0, 0, 0, 0, 6),
            Card(2, 'u', 1, 0, 2, 2, 3, 0),
            Card(2, 'u', 1, 0, 2, 3, 0, 3),
            Card(2, 'u', 2, 5, 3, 0, 0, 0),
            Card(2, 'u', 2, 2, 0, 0, 1, 4),
            Card(2, 'u', 2, 0, 5, 0, 0, 0),
            Card(2, 'u', 3, 0, 6, 0, 0, 0),
            Card(2, 'w', 1, 0, 0, 3, 2, 2),
            Card(2, 'w', 1, 2, 3, 0, 3, 0),
            Card(2, 'w', 2, 0, 0, 1, 4, 2),
            Card(2, 'w', 2, 0, 0, 0, 5, 3),
            Card(2, 'w', 2, 0, 0, 0, 5, 0),
            Card(2, 'w', 3, 6, 0, 0, 0, 0),
            Card(2, 'g', 1, 3, 0, 2, 3, 0),
            Card(2, 'g', 1, 2, 3, 0, 0, 2),
            Card(2, 'g', 2, 4, 2, 0, 0, 1),
            Card(2, 'g', 2, 0, 5, 3, 0, 0),
            Card(2, 'g', 2, 0, 0, 5, 0, 0),
            Card(2, 'g', 3, 0, 0, 6, 0, 0),
            Card(2, 'r', 1, 2, 0, 0, 2, 3),
            Card(2, 'r', 1, 0, 3, 0, 2, 3),
            Card(2, 'r', 2, 1, 4, 2, 0, 0),
            Card(2, 'r', 2, 3, 0, 0, 0, 5),
            Card(2, 'r', 2, 0, 0, 0, 0, 5),
            Card(2, 'r', 3, 0, 0, 0, 6, 0),
        ]
    self.level_3_cards = [
            Card(3, 'b', 3, 3, 3, 5, 3, 0),
            Card(3, 'b', 4, 0, 0, 0, 7, 0),
            Card(3, 'b', 4, 0, 0, 3, 6, 3),
            Card(3, 'b', 5, 0, 0, 0, 7, 3),
            Card(3, 'u', 3, 3, 0, 3, 3, 5),
            Card(3, 'u', 4, 7, 0, 0, 0, 0),
            Card(3, 'u', 4, 6, 3, 0, 0, 3),
            Card(3, 'u', 5, 7, 3, 0, 0, 0),
            Card(3, 'w', 3, 0, 3, 3, 5, 3),
            Card(3, 'w', 4, 0, 0, 0, 0, 7),
            Card(3, 'w', 4, 3, 0, 0, 3, 6),
            Card(3, 'w', 5, 3, 0, 0, 0, 7),
            Card(3, 'g', 3, 5, 3, 0, 3, 3),
            Card(3, 'g', 4, 0, 7, 0, 0, 0),
            Card(3, 'g', 4, 3, 6, 3, 0, 0),
            Card(3, 'g', 5, 0, 7, 3, 0, 0),
            Card(3, 'r', 3, 3, 5, 3, 0, 3),
            Card(3, 'r', 4, 0, 0, 7, 0, 0),
            Card(3, 'r', 4, 0, 3, 6, 3, 0),
            Card(3, 'r', 5, 0, 0, 7, 3, 0),
        ]
    random.shuffle(self.level_1_cards)
    random.shuffle(self.level_2_cards)
    random.shuffle(self.level_3_cards)
   
  def init_nobles(self):
    self.noble_pool = [
        Noble(0, 3, 0, 0, 0, 4, 4),
        Noble(1, 3, 0, 0, 3, 3, 3),
        Noble(2, 3, 0, 4, 4, 0, 0),
        Noble(3, 3, 4, 4, 0, 0, 0),
        Noble(4, 3, 3, 3, 0, 0, 3),
        Noble(5, 3, 0, 0, 4, 4, 0),
        Noble(6, 3, 0, 3, 3, 3, 0),
        Noble(7, 3, 4, 0, 0, 0, 4),
        Noble(8, 3, 3, 3, 3, 0, 0),
        Noble(9, 3, 3, 0, 0, 3, 3),
    ]
    random.shuffle(self.noble_pool)