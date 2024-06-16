
my_dict = {'a': [1, 2], 'b': [2, 3], 'c': 3}
 
# Print both keys and values using zip()
print("Keys and Values:")
for key, value in zip(my_dict.keys(), my_dict.values()):
    print(f"{key}: {value}")
