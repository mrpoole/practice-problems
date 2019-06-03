// //## Dependencies

// - write code that takes the dependecies listed in dependecies.js
// - put them into an array the preserves the proper dependency injection order.
// - example output: 
// - ['awesome', 'c_lib', 'keys', 'stdio', 'bovine', 'quadrapated', 'moocow', 'sayWhat', 'iPity']


var dependencies = [
  {
    name: 'superCool',
    dependencies: [
      'awesome',
      'stdio',
      'moocow'
    ]
  },
  {
    name: 'mrMan',
    dependencies: [
      'sayWhat',
      'stdio',
      'iPity'
    ]
  },
  {
    name: 'moocow',
    dependencies: [
      'bovine',
      'quadrapated'
    ]
  },
  {
    name: 'stdio',
    dependencies: [
      'c_lib',
      'keys',
    ]
  }
]
