#!/usr/bin/env python3
"""
WUBBLE Artwork Pricing Model Calculator
Calculates the exponential price increase from $100 to $10,000 over 10,000 pieces
"""

import math

# Constants
INITIAL_PRICE = 100
FINAL_PRICE = 10000
TOTAL_PIECES = 10000
STATED_INCREASE = 0.045  # 0.045% per piece

# Calculate the actual required increase rate
# Using compound interest formula: Final = Initial * (1 + rate)^n
# 10000 = 100 * (1 + rate)^9999
# 100 = (1 + rate)^9999
# rate = 100^(1/9999) - 1

required_multiplier = FINAL_PRICE / INITIAL_PRICE
actual_rate = math.pow(required_multiplier, 1/(TOTAL_PIECES-1)) - 1
actual_rate_percent = actual_rate * 100

print(f"WUBBLE Artwork Pricing Model")
print(f"="*50)
print(f"Initial Price: ${INITIAL_PRICE:,.2f}")
print(f"Final Price: ${FINAL_PRICE:,.2f}")
print(f"Total Pieces: {TOTAL_PIECES:,}")
print(f"Price Multiplier: {required_multiplier}x")
print(f"Required Rate per Piece: {actual_rate_percent:.6f}%")
print(f"Stated Rate: {STATED_INCREASE}%")
print()

# Calculate some milestone prices
milestones = [1, 100, 500, 1000, 2500, 5000, 7500, 9000, 9999, 10000]
print(f"Price Progression Milestones:")
print(f"{'Piece #':<10} {'Price':<12} {'Total Revenue':<15}")
print(f"-"*40)

total_revenue = 0
for i in range(1, TOTAL_PIECES + 1):
    price = INITIAL_PRICE * math.pow(1 + actual_rate, i - 1)
    total_revenue += price
    
    if i in milestones:
        print(f"{i:<10} ${price:<11,.2f} ${total_revenue:<14,.2f}")

print(f"\nTotal Revenue from All Sales: ${total_revenue:,.2f}")
print(f"Average Price per Piece: ${total_revenue/TOTAL_PIECES:,.2f}")
print(f"\n100% of revenue ({total_revenue:,.2f}) will be used to buy WUBBLE")
print(f"Creating a massive value injection into the Wubbleton economy!") 