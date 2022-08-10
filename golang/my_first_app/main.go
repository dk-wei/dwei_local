package main

import (
	"fmt"
	
)

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
	
	fmt.Println(a)


}