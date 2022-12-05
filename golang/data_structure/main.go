package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello, World!")

	// array / slice
	// 慢慢的会发现 []int{...} 这种表现形式就是灵魂
	// := 其实类似 let，用于创建new element
	arr := [8]int{0, 1, 2, 4, 5, 6, 7, 8} //array with predifined len
	slice := []int{0, 1, 2}               // slice
	slice2 := []int{5, 6}
	slice3 := []int{111, 222, 333}
	slice4 := make([]int, 3) // make can set cap of slice
	slice5 := arr[:5]
	arr2d := [2][2]int{{1, 2}, {3, 4}}
	slice2d := [][]int{{1, 2}, {3, 4}}

	// creating a slice with a length of 5 and a capacity of 10
	// the make funciton allws us to create a slice with specific length
	sliceOfStrings := make([]string, 5, 10)

	b := append(slice, slice2...)
	b = append(b, 333, 4444, 5555) // append multiple elements

	fmt.Println(slice)
	fmt.Println(arr2d)
	fmt.Println(slice2d)
	fmt.Println(b)
	fmt.Println(slice5)
	fmt.Println(sliceOfStrings)

	sum := 9
	for i := 0; i < len(slice); i++ { // 任何一个新的var， 都是用 :=
		sum += slice[i]
	}

	fmt.Println(sum)

	copy(slice3, slice)
	copy(slice4, slice)
	fmt.Println(slice3)
	fmt.Println(slice3)

	for i, v := range slice2d { // range 就相当于enumerate, range loop
		fmt.Println(i, v)
	}

	// Map / Hashmap / Dictionary
	score_0 := map[string]string{}
	score_0["hello"] = "world"

	fmt.Println(score_0["hello"])

	score := map[string]int{
		"dave":  99,
		"mia":   59,
		"frank": 20,
	}

	delete(score, "mia")

	score["alex"] = 20

	for k, v := range score {
		if k == "dave" {
			fmt.Println("yes", v)
		} else {
			fmt.Println("No")
		}
	}

	new_score := score["alex"]
	fmt.Println(new_score)

	// Struct / Class
	type Rectangle struct {
		length float32
		width  float32
	}
	myRect := []Rectangle{
		{10, 5},
		{20, 30},
	}
	//myRect = Rectangle{length: 100, width: 50}

	fmt.Println(myRect)

}
