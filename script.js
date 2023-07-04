window.onload = function () {
	let n1 = document.getElementById("n1");
		let n2 = document.getElementById("n2");
		// let calcul = document.getElementById("calcul");
		// console.log(calcul.innerHTML);
		let egal = document.getElementById("egal");
		let re = document.getElementById("re");
		// les button
		let plus = document.getElementById("plus");
		// console.log(plus.innerHTML);
		let moin = document.getElementById("moin");
		let fois = document.getElementById("fois");
		let mul = document.getElementById("mul");
		let clear = document.getElementById("clear");
		let ego = document.getElementById("ego");
		// les inputs
		let input1 = document.getElementById("input1");
		// let aa = input1.value;
		// console.log(aa)
		let input2 = document.getElementById("input2");
		// let bb = input2.value;
		let index1 = 0;
		let index2 = 0;
		let index3 = 0;
		// let index4 = 0;
		
		input1.onkeyup= function () {
			n1.innerHTML = input1.value;
			console.log(input1.value);
			console.log(n1.innerHTML);
		}
		input2.onkeyup= function () {
			n2.innerHTML = input2.value;
		}

		plus.onclick= function () {
			calcul.innerHTML = " + ";
			console.log(typeof calcul.innerHTML);
			index1++ ;
			console.log(index1);
		}
		moin.onclick= function () {
			calcul.innerHTML = " - ";
			console.log(calcul.innerHTML);
			index2++ ;
			console.log(index2);
		}
		fois.onclick= function () {
			calcul.innerHTML = " * ";
			console.log(calcul.innerHTML);
			index3++ ;
			console.log(index3);
		}
		mul.onclick= function () {
			calcul.innerHTML = " / ";
			console.log(calcul.innerHTML);
			// alert("ok")
		}

		ego.onclick = function () {
			egal.innerHTML = " = ";
			if(index1 > 0 ){
				let v1 = (+input1.value) + (+input2.value);
				re.innerHTML = v1;
			}else if(index2 > 0){
				let v2 = (+input1.value) - (+input2.value);
				re.innerHTML = v2;
			}else if(index3 > 0){
				let v3 = (+input1.value) * (+input2.value);
				re.innerHTML = v3;
			}else{
				let v4 = (+input1.value) / (+input2.value);
				re.innerHTML = v4;
			}
			
		}
		clear.onclick= function () {
			n1.innerHTML = "";
			n2.innerHTML = "";
			calcul.innerHTML = "";
			egal.innerHTML = "";
			input1.value = "";
			input2.value = "";
			re.innerHTML = "";
			index1 = 0 ;
			index2 = 0 ;
			index3 = 0 ;
		}
}