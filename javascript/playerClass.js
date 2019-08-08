class Player {


    #inventory = [];

    constructor(_health,_attack,_defense){

      this.hp = _health;
      this.atk = _attack;
      this.def = _defense;



    }

    //-----------getters and setters-----------


    get health(){
      return this.hp;
    }

    get attack(){
      return this.atk;
    }


    get defense(){
      return this.def;
    }


    get inventory(){
      return this.#inventory;
    }

    equipItem(_item){

      this.itemName = _item.name;
      this.hp += _item.health;
      this.atk += _item.attack;
      this.def += _item.defense;
      this.#inventory =+ [_item];
    }






}

export {Player};
