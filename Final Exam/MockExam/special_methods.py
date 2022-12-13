import math
class Votes:

    def __init__(self,v):
      self.v = v

    def __add__(self, two):
        return self.v + two.v

    def __sub__(self, two):
        return self.v - two.v

    def __ge__(self, two):
        return self.v >= two.v
    
    def __le__(self, two):
        return self.v <= two.v

    def __lt__(self, two):
        return self.v < two.v

    def __gt__(self, two):
        return self.v > two.v

    def __eq__(self, two):
        return self.v == two.v

    

v1 = Votes(12)
v2 = Votes(5)
v3 = Votes(12)


print(v1+v2)
print(v1-v2)
print(v1>=v2)
#     12   5
print(v1<=v2)
print(v1>v2)
print(v1<v2)
print(v1==v2)
print(v1==v3)

'''
assert v1>=v2 = True
assert v1<=v2 = False
assert v1>v2 = True
assert v1<v2 = False
assert v1==v2 = False
assert v1==v3 = True
'''