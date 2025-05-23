document.getElementById("h1").textContent = "Lets Solve for the area of a rectangle"

let area

document.getElementById("solve").onclick =
    function area() { 
        let length = document.getElementById("length").value; 
        length = Number(length)
        let breadth = document.getElementById("breadth").value
        breadth = Number(breadth)
        let area = length * breadth
        document.getElementById("solution").textContent = area
        let boolean = Boolean(area)
        if (boolean == true) {
            document.getElementById("boolean").textContent = boolean
        }
    }