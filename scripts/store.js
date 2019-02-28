

'use strict';

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id){
    return items.find(item => item.id  === id);
  };

  const addItem = function(name) {
    try{
      Item.validateName(name);
      store.items.push(Item.create(name));
    }
    catch(err)
    {
      console.log(`Cannot add items: ${err.message}`);

    }

  };

  const findAndToggleChecked = function (id){

    this.findById(id).checked = !this.findById(id).checked;
  };

  const findAndUpdateName = function (id,newName){
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    }
    catch(err)
    {
      console.log(`Cannot add items: ${err.message}`);
    }

  };

  const findAndDelete = function (id){
    this.items = this.items.filter(item => item.id  !== id);
  };

  const toggleCheckedFilter = function (){

    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function (newSearchTerm){

    this.searchTerm = newSearchTerm;

  };

  


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,

    
  };




}() );