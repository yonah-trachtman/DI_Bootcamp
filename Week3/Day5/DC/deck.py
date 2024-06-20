# Part 2: Create a deck of cards class.

# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

#     The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
#     The Deck class :
#         should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#         should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random
class Card:
    def __init__(self, suit:str, value: str) -> None:
        self.suit = suit
        self.value = value




class Deck:
    def __init__(self, cards: list) -> None:
        self.cards = cards


    def shuffle(self) -> list:
        if len(self.cards) >= 52:
            random.shuffle(self.cards)
        else:
            print("You're not playing with a full deck")
        
    def deal(self) -> None:
        randomCard = random.randint(0, len(self.cards))
        print(f"{self.cards[randomCard].value} of {self.cards[randomCard].suit}")
        self.cards.pop(randomCard)



suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
deck = []

for suit in suits:
    for value in values:
       deck.append(Card(suit, value))


newDeck = Deck(deck)
for card in newDeck.cards:
    print(f"{card.value} of {card.suit}")
newDeck.shuffle()
for card in newDeck.cards:
    print(f"{card.value} of {card.suit}")

newDeck.deal()
newDeck.shuffle()



