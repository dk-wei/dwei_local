package main

import (
	"errors"
	"fmt"
	"strconv"
)

type person struct {
	name string
	age int

}

func main() {

	me := "Dave"
	var name string
	var x int = 7
	var y int = 3
	//var z float32 = 3.2
	var sum int = x/y

	fmt.Println("Hello World!")
	fmt.Println(me)
	fmt.Println(sum)
	fmt.Println(name)

	if x<5 {

		fmt.Println("the num is too small")
	} else if x == 6 {

		fmt.Println("bingo")
		
	}	else {

		fmt.Println("idk")
	}

	var a[3]int
	a[2] = 7

	b := [5]int{2,3, 4}
	b[2] = 10000

	c := []int{2,3}

	d := []interface{}{2,3, '1', '2','h', "h", "happy"}
	d = append(d, "everyday")

	e := []interface{}{"还是这个对味", "是啵"}


	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
	fmt.Println(e)
	fmt.Println(d[2])
	fmt.Println(d[len(d)-3 : len(d)-1])

	f := make(map[string]string)
	f["i"] = "dave"

	g := make(map[string]interface{})
	g["i"] = "dave"
	g["number"] = 2
	fmt.Println(g)

	for i := 0; i < 10; i++ {
		fmt.Println(i+100)

	}

	j := 1
	for j < 100{
		j*=3
		fmt.Println(j)

	}

	strings := []string{"hello", "world"}
	for i, v := range strings{
		fmt.Println("index", i , "value", v)

	}

	m := make(map[string]interface{})
	m["a"] = "alpha"
	m["b"] = "beta"

	for key, value := range m {
	fmt.Println(key, value)

	}

	fmt.Println(sumof(2, 3))

	result, err := sumof(2, 3)

	if err != nil {
		fmt.Println("there is a dang problem")
	} else {
		fmt.Printf(result)
	}

	p := person{name: "Jack Ma", age: 22}
	fmt.Println(p.age)
}


func sumof(x, y int) (string, error){
	res := strconv.Itoa(x+y)

	if res != "I'm lovin' it" {

		return "haha", errors.New("Invalid number")
	}

	return res, nil


}

