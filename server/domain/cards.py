
COLORS = ('b', 'u', 'w', 'g', 'r')
LEVELS = ('level1', 'level2', 'level3')
COLOR_DICT = {
    'b': 'chocolate', # 黑宝石
    'u': 'sapphire', # 蓝宝石
    'w': 'diamond', # 钻石
    'g': 'emerald', # 绿宝石 
    'r': 'ruby', # 红宝石
}

class Card(object):
  def __init__(self, l, c, p, w=0, u=0, g=0, r=0, b=0):
      self.color = c
      self.level = l
      self.points = p
      self.cost = {
          'w': w,
          'u': u,
          'g': g,
          'b': b,
          'r': r,
      }

  def __str__(self):
    result = "{0} card worth {1}, costing ".format(COLOR_DICT[self.color], self.points)
    costs = ["{0} {1}".format(v, COLOR_DICT[k]) for k, v in self.cost.items() if v > 0]
    return result + ', '.join(costs)

  def dict(self):
    return {
      'color': self.color,
      'points': self.points,
      'cost': self.cost,
      'level': self.level,
    }

class Noble(object):
  def __init__(self, nid, p, w=0, u=0, g=0, r=0, b=0):
    self.points = p
    self.id = nid
    self.uuid = uuid.uuid4().hex
    self.requirement = {
      'w': w,
      'u': u,
      'g': g,
      'r': r,
      'b': b,
    }

  def __str__(self):
    result = "noble worth {0}, seeking ".format(self.points)
    costs = ["{0} {1}".format(v, COLOR_DICT[k]) for k, v in self.requirement.items() if v > 0]
    return result + ', '.join(costs)

  def dict(self):
    return {
      'id': self.id,
      'points': self.points,
      'requirement': self.requirement,
    }