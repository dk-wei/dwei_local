package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello, World!")

	// array & slice
	//arr:=[3]int{0, 1, 2}  //array with predifined len
	slice := []int{0, 1, 2} // slice
	slice2 := []int{5, 6}
	slice3 := []int{111, 222, 333}
	slice4 := make([]int, 3) // make can set cap of slice
	arr2d := [2][2]int{{1, 2}, {3, 4}}
	slice2d := [][]int{{1, 2}, {3, 4}}
	b := append(slice, slice2...)

	fmt.Println(slice)
	fmt.Println(arr2d)
	fmt.Println(slice2d)
	fmt.Println(b)

	sum := 9
	for i := 0; i < len(slice); i++ { // 任何一个新的var， 都是用 :=
		sum += slice[i]
	}

	fmt.Println(sum)

	copy(slice3, slice)
	copy(slice4, slice)
	fmt.Println(slice3)
	fmt.Println(slice3)

	for i, v := range slice2d { // range 就相当于enumerate
		fmt.Println(i, v)
	}

	// dictionary
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
}
