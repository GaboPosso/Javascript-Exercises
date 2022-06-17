function func(){
    const items = [12, 24, 36];
    const copy = [];
    
    items.forEach((item) => {
      copy.push(item + item + 2);
    })
    return copy;
  }
  console.log(func());