const data = [
  { id: 1, children: [{ id: 2, children: [{ id: 5 }] }] },
  { id: 2, children: [{ id: 9 }] },
];

function test(data1, parentId) {
  return data1.flatMap((object) => {
    const flat = [];
    if (object.children) {
      flat.push({ id: object.id, parentId: parentId });
      return flat.concat(test(object.children, object.id));
    } else {
      flat.push({ ...object, parentId });
      return flat;
    }
  });
}

console.log(test(data, ''));
