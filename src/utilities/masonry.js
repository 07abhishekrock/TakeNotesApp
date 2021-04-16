function isFoundInArray(target_element, list){
  return (list.filter((element)=>
  {
    return element === target_element;
  }
  )).length > 0;
}





class MasonryObject{

    constructor(options){
      this.main_className = options.main_className;
      this.size = options.size;
      this.element_base_height = options.element_base_height;
      this.element_base_span = options.element_base_span;
      this.main_array = [];
      this.parent_className = options.parent_className;
      for(let i = 0;i<options.count;i++){
        this.main_array.push([i]);
      }
    }

    changeSizeAndMainArray(new_size){
        let elements_list = document.querySelectorAll(`div.${this.main_className}`)

      //-------------testing code ----------------
        if(elements_list.length > this.main_array.length){
          this.main_array.unshift([0]);
          this.main_array = this.main_array.map((element, index)=>{
            if(index === 0){
              return element;
            }
            else{
              return element.map((c_element)=>c_element+1);
            }
          })
        }
      //testing code ends here --------------------



        this.size = new_size;
        let press_array = [];
        let first_indices_array = [];
        let height_array = [];
        for(let i = 0;i<elements_list.length;i++){
          if(i === 0){

              this.main_array[i] = this.main_array[i].map((_,index)=>{return this.main_array[i][0] + index * new_size});
              press_array.push(...this.main_array[i]);
              first_indices_array.push(this.main_array[i][0]);
          }

          else{
              let j = 1;
              while(true){
                  if(!isFoundInArray(this.main_array[i-1][0] + j, press_array)){
                    this.main_array[i][0] = this.main_array[i-1][0] + j;
                    this.main_array[i] = this.main_array[i].map((_,index)=>{return this.main_array[i][0] + index * new_size});
                    press_array.push(...this.main_array[i]);
                    break;
                  }
                  else {
                      j++;
                  }
              }

              first_indices_array.push(this.main_array[i][0]);
          }

        let height_stack_above = 0;
        for(let j = this.main_array[i][0] - this.size;j >= 0;j-=this.size){
          if(isFoundInArray(j, first_indices_array)){
            let index = first_indices_array.indexOf(j);
            height_stack_above = height_stack_above + elements_list[index].offsetHeight + 70;
          }
        }
        height_array.push(height_stack_above + elements_list[i].offsetHeight);
        elements_list[i].style.transform = `translate(${(this.main_array[i][0] % this.size) * this.element_base_span}px, ${height_stack_above}px)`
        }
        let max_height = (height_array.sort((a,b)=>b-a))[0];
        let parent = (document.querySelector(`div.${this.parent_className}`));

        parent.style.height = `${max_height + 50}px`

    }


    SetLayout(pressed_index, toggle_type){
      let elements_list = document.querySelectorAll(`div.${this.main_className}`);
      elements_list[pressed_index].children[0].style.height = `initial`;
      let press_array = [];
      let first_indices_array = [];
      let height_array = [];

      //loop to check and set positions of squares
      for(let i = 0;i<elements_list.length;i++){

  //index less than the currently clicked index ------------------------------------------------
  //elements are just added
        if(i < pressed_index){
          press_array.push(...this.main_array[i]); //store the used indices
          first_indices_array.push(this.main_array[i][0]);
        }

  //index greater than the currently clicked index ------------------------------------------------
  //index checked with the previous index and appropriate position set up -------------------------------
        else if(i > pressed_index){
          let j = 1;
            while(true){
                if(!isFoundInArray(this.main_array[i-1][0] + j , press_array)){
                    this.main_array[i][0] = this.main_array[i-1][0] + j;
                    this.main_array[i] = this.main_array[i].map((_,index)=>{return this.main_array[i][0] + index * this.size})
                    press_array.push(...this.main_array[i]);
                    first_indices_array.push(this.main_array[i][0]);
                    break;
                }
                else{
                    j++;
                }
            }
        }
  //index equal to pressed index
  //generate occupied indices based on new height or remove entirely if size reduced.

        else if(i === pressed_index){
          if(toggle_type === true){
            let n = 1;
            while(n < Math.ceil(elements_list[i].offsetHeight / 420)){
              this.main_array[i].push( this.main_array[i][0] + this.size * n);
              press_array.push(this.main_array[i][0] + this.size * n);
              n++;
            }

              first_indices_array.push(this.main_array[i][0]);
          }

          else{
            this.main_array[i] = [this.main_array[i][0]];
            press_array.push(i);
            first_indices_array.push(this.main_array[i][0]);
          }
        }


        //changing elements position accordingly
        let height_stack_above = 0;
        for(let j = this.main_array[i][0] - this.size;j >= 0;j-=this.size){
          if(isFoundInArray(j, first_indices_array)){
            let index = first_indices_array.indexOf(j);
            height_stack_above = height_stack_above + elements_list[index].offsetHeight + 70;
          }
        }
        height_array.push(height_stack_above + elements_list[i].offsetHeight);
        elements_list[i].style.transform = `translate(${(this.main_array[i][0] % this.size) * this.element_base_span}px, ${height_stack_above}px)`

      }
      let max_height = (height_array.sort((a,b)=>b-a))[0];
      let parent = (document.querySelector(`div.${this.parent_className}`));

      parent.style.height = `${max_height + 50}px`
    }


  }


  export default MasonryObject;