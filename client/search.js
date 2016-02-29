Tasks = new Mongo.Collection("tasks");
PersonIndex = new EasySearch.Index({
  collection: Tasks,
  fields: ['username'],
  engine: new EasySearch.Minimongo()
});

Tracker.autorun(function () {
  let cursor = PersonIndex.search('rahul'); // search all docs that contain "Marie" in the name or score field

  console.log(cursor.fetch()); // log found documents with default search limit
  console.log(cursor.count()); // log count of all found documents
});

Template.search.helpers({
  PersonIndex: () => PersonIndex // instanceof EasySearch.Index
});