import _ from 'lodash';

const convertArrayToObject = (array) => {
  const mapped = _.keyBy(array, 'id');
  return mapped;
};

const array = [
  {id: 'a', name: 'Foo'},
  {id: 'b', name: 'Bar'},
];
console.log('original:', array);
console.log('converted:', convertArrayToObject(array));
