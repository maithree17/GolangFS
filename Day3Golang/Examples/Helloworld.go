package main
import "fmt"

type student struct{
	Name string
	regno int
	Dept string
}
func main(){
	// message := "hello world!"
	// fmt.Println(message)
	// var x,y int
	// fmt.Println("Enter two number")
    // fmt.Scan(&x,&y)
	// var add=x+y
	// fmt.Println(add)
    // ifelseDemo()
	// val()
	// sumofn()
	// forCondiDemo()
	// forPythonStyle()
	st :=student{Name:"abc",regno:123,Dept:"CS"}
	fmt.Println(st)
	fmt.Println("Name:",st.Name,"\nreg no:",st.regno,"\nDepartment:",st.Dept)
}

func ifelseDemo(){
	var age int;
	fmt.Println("Enter the age")
	fmt.Scanln(&age)
	if age>18{
		fmt.Println("Adult")
	}else{
		fmt.Println("Minor")
	}
}

func val(){
	var a,b int;
	fmt.Println("Enter the two values")
	fmt.Scan(&a,&b)
	if a>b{
		fmt.Println("a is greater")
	}else if b>a{
		fmt.Println("b is greater")
	}else{
		fmt.Println("a and b are equal")
	}
}

func sumofn(){
	var n int
	var sum =0
	fmt.Println("Enter the value for the sum of n values")
	fmt.Scanln(&n)
	for i:=1;i<=n;i++{
		sum+=i
	}
	fmt.Println(sum)
}

func forCondiDemo(){
	n:=1
	for n<5{
		n*=2
	}
	fmt.Println(n)
}

func forPythonStyle(){
	strings :=[]string{"hello","world","Golang","NIE"}
	for i,s :=range strings{
		fmt.Println(i,s)
	}
}

