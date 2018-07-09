import random

class Game(object):
      """
          Simon says game for learning some python
      """
      def __init__(self):
          self.score = -1
        
      def add_move(self):
          new_char = self.get_move()
          self.score += 1
          return str(new_char)

      def get_move(self):
          rand_num = random.randint(97, 122)
          return chr(rand_num)

      def is_matching_list(self, user_input, char_list):
          if user_input == char_list:
              return True
          else:
              return False
