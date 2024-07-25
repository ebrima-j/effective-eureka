let sq1 = [];
let sq2 = [];
let sq3 = [];
let sq4 = [];
let sq5 = [];
let sq6 = [];
let x1;
let x2;
let x3;
let x4;
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;

function setup() {
  createCanvas(700, 700);
  generateShape1();
  generateShape2();
  generateShape3();
  generateShape4();
  generateShape5();
  generateShape6();
  background(0, random(25, 75));
}

function draw() {
  x1 = floor(random(0, 360));
  x2 = x1 - floor(random(0, 360));
  x3 = x1 + floor(random(0, 360));
  x4 = x3 - floor(random(0, 360));
  
  translate(height/2, width/2);
  
  if (i3 < sq3.length)
    sq3[i3++].display();
  
  push();
  rotate(x1);
  if (i1 < sq1.length)
    sq1[i1++].display();
  
  if (i2 < sq2.length)
    sq2[i2++].display();
  pop();
  
  push();
  rotate(x2);
  if (i4 < sq4.length)
    sq4[i4++].display();
  pop();
  
  push();
  rotate(x3);
  if (i5 < sq5.length)
    sq4[i5++].display();
  pop();
  
  push();
  rotate(x4);
  if (i6 < sq6.length)
    sq6[i6++].display();
  pop();
  
  if (i1 >= sq1.length && i2 >= sq2.length && i3 >= sq3.length && i4 >= sq4.length && i5 >= sq5.length && i6 >= sq6.length)
    noLoop();
}

function generateShape1() {
  let totalWidth = 0;
  let totalHeight = 0;
  
  let maxSize = random(height/4, height/2); // Maximum height of a rectangle
  
  let maxTotalHeight = 2*height/3;
  let maxTotalWidth = 2*width/3;
  
  
  while (totalHeight < maxTotalHeight) {
    let sqWidth = random(20, maxSize);
    let sqHeight = random(20, min(maxSize, maxTotalHeight)); // Adjust height to fit within canvas
    
    let x = 0;
    while (x < maxTotalWidth) {
        
      sq1.push(new Shape(x, totalHeight, sqWidth, 0));
      x += sqWidth; //+ floor(random(8, 16));
      sqWidth = random(20, min(maxSize, maxTotalWidth));
    }
    totalHeight += sqHeight;
  }
}

function generateShape2() {
  let totalWidth = 0;
  let totalHeight = 0;
  
  let maxSize = random(height/4, height/2); // Maximum height of a rectangle
  
  let maxTotalHeight = 2*height/3;
  let maxTotalWidth = 2*width/3;
  
  
  while (totalHeight < maxTotalHeight) {
    let sqWidth = random(20, maxSize);
    let sqHeight = random(20, min(maxSize, maxTotalHeight)); // Adjust height to fit within canvas
    
    let x = 0;
    while (x < maxTotalWidth) {
        
      sq2.push(new Shape(x, totalHeight, sqWidth, 0));
      x += sqWidth; //+ floor(random(8, 16));
      sqWidth = random(20, min(maxSize, maxTotalWidth));
    }
    totalHeight += sqHeight;
  }
}

function generateShape3() {
  let totalWidth = 0;
  let totalHeight = 0;
  
  let maxSize = random(height/4, height/2); // Maximum height of a rectangle
  
  let maxTotalHeight = height;
  let maxTotalWidth = width;
  
  
  while (totalHeight < maxTotalHeight) {
    let sqWidth = random(20, maxSize);
    let sqHeight = random(20, min(maxSize, maxTotalHeight)); // Adjust height to fit within canvas
    
    let x = 0;
    while (x < maxTotalWidth) {
        
      sq3.push(new Shape(x, totalHeight, sqWidth, 0));
      x += sqWidth; //+ floor(random(8, 16));
      sqWidth = random(20, min(maxSize, maxTotalWidth));
    }
    totalHeight += sqHeight;
  }
}

//Blue
function generateShape4() {
  let totalWidth = 0;
  let totalHeight = 0;
  
  let maxSize = random(height/4, height/2); // Maximum height of a rectangle
  
  let maxTotalHeight = height;
  let maxTotalWidth = width;
  
  
  while (totalHeight < maxTotalHeight) {
    let sqWidth = random(20, maxSize);
    let sqHeight = random(20, min(maxSize, maxTotalHeight)); // Adjust height to fit within canvas
    
    let x = 0;
    while (x < maxTotalWidth) {
        
      sq4.push(new Shape(x, totalHeight, sqWidth, 1));
      x += sqWidth; //+ floor(random(8, 16));
      sqWidth = random(20, min(maxSize, maxTotalWidth));
    }
    totalHeight += sqHeight;
  }
}

//Red
function generateShape5() {
  let totalWidth = 0;
  let totalHeight = 0;
  
  let maxSize = random(height/4, height/2); // Maximum height of a rectangle
  
  let maxTotalHeight = height;
  let maxTotalWidth = width;
  
  
  while (totalHeight < maxTotalHeight) {
    let sqWidth = random(20, maxSize);
    let sqHeight = random(20, min(maxSize, maxTotalHeight)); // Adjust height to fit within canvas
    
    let x = 0;
    while (x < maxTotalWidth) {
        
      sq4.push(new Shape(x, totalHeight, sqWidth, 2));
      x += sqWidth; //+ floor(random(8, 16));
      sqWidth = random(20, min(maxSize, maxTotalWidth));
    }
    totalHeight += sqHeight;
  }
}

//Green
function generateShape6() {
  let totalWidth = 0;
  let totalHeight = 0;
  
  let maxSize = random(height/4, height/2); // Maximum height of a rectangle
  
  let maxTotalHeight = height;
  let maxTotalWidth = width;
  
  
  while (totalHeight < maxTotalHeight) {
    let sqWidth = random(20, maxSize);
    let sqHeight = random(20, min(maxSize, maxTotalHeight)); // Adjust height to fit within canvas
    
    let x = 0;
    while (x < maxTotalWidth) {
        
      sq4.push(new Shape(x, totalHeight, sqWidth, 3));
      x += sqWidth; //+ floor(random(8, 16));
      sqWidth = random(20, min(maxSize, maxTotalWidth));
    }
    totalHeight += sqHeight;
  }
}

class Shape {
  constructor(x, y, s, c) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.c = c;
    this.squ = createGraphics(s, s);
  }
  
  display() {
    this.squ.noStroke();
    
    if (this.c == 0) {
      this.squ.fill(0, random(200));
      this.squ.circle(this.x, this.y, this.s);
      
      image(this.squ, this.x, this.y);
    } else if (this.c == 1) {
      this.squ.fill(0, 50, random(255), random(150, 255));
      this.squ.circle(this.x, this.y, this.s);
      
      image(this.squ, this.x, this.y);
    } else if (this.c == 2) {
      this.squ.fill(random(255), 0, 0, random(200));
      this.squ.circle(this.x, this.y, this.s);
      
      image(this.squ, this.x, this.y);
    } else if (this.c == 3) {
      this.squ.fill(0, random(255), 0, random(150));
      this.squ.circle(this.x, this.y, this.s);
      
      image(this.squ, this.x, this.y);
    }
  }
}
