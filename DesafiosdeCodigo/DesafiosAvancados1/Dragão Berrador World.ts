var s = gets().split(" ");

let n = parseInt(s[0]);
let min = parseInt(s[1]);
let max = parseInt(s[2]);

		let altura, conta = 0;
		for (let x=0 ; x<n ; x++) {
		  altura = gets();            
		  if(altura >= min && altura <= max)
			  conta++;
		}
		print(conta);