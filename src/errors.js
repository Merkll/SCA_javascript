const a = 10

const fun2 = () => {
  a() 
}

const fun  = () => {
  fun2()
}

try {
  fun()
} catch (error) {
  
}