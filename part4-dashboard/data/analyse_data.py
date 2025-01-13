import collections
from pathlib import Path
import json

data = json.loads(Path('monetization-api.json').read_text())["data"]

multi_sets = collections.defaultdict(set)

for item in data:
    for key, value in item.items():
        multi_sets[key].add(value)

for key, values in multi_sets.items():
    if len(values) < 20:
        print(key, "=", sorted(values))
