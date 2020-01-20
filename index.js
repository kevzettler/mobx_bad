import { action, computed, observable } from 'mobx';

class ShouldMemoize {
  @observable position = 0
  staticValue = 200;

  @computed get expensiveStaticOperation(){
    console.log('this is expensive and shoudl not recompute');
    return this.staticValue*2;
  }

  @computed get output(){
    return this.position + this.expensiveStaticOperation;
  }

  @action incrementPosition(val){
    this.position+= 1;
  }
}


let M = new ShouldMemoize();
console.log('**********start*********');
setInterval(() =>{
  M.incrementPosition();
  console.log(
    "*tick*",
    M.output
  );
}, 60)
