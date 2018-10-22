
import json
from pprint import pprint

# with open('receipt.json') as f:
#     data = json.load(f)




class Receipt:
    """Receipt Class"""

    def __init__(self, fileString):
        with open('receipt.json') as f:
            data = json.load(f)
        
        self.data = data
        self.items = data['items']

    def printData(self):
        print(self.data)


myReceipt = Receipt('receipt.json')

myReceipt.printData()