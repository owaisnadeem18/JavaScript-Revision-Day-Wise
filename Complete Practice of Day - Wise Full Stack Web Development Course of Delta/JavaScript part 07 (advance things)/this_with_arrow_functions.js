/* This with arrow functions */

let obj = {
  name: "Owais",
  age: 22,
  dept: this,
  obj_naam: function () {
    console.log(this);
    return this.name;
  },
};

// normal function ka 'this' wo function hota hay , jis nay usay call lagaye hay
// arrow function ka 'this' us function ka parent hota hay , jis nay usay call lagaye hay
