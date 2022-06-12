function MakeZakaz(){
var data = document.querySelector('#data');
	 
var name = document.querySelector('#name').value;
var surname = document.querySelector('#surname').value;
var otchestv = document.querySelector('#otchestvo').value;
var phone = document.querySelector('#phone').value;
var comment = document.querySelector('#comment').value;

if (name == "" || surname == "" || otchestv == "" || phone == "") 
{
	document.getElementById('okno').style.height = '100px';
	data.innerHTML = "Поля заполнены некорректно или не заполнены вовсе";

	document.querySelector('#name').value = "";	
	document.querySelector('#surname').value = "";
	document.querySelector('#otchestvo').value = "";
	document.querySelector('#phone').value = "";
	document.querySelector('#comment').value = "";
}
else
{
	document.getElementById('okno').style.height = '200px';
	data.innerHTML = "Уважаемый " + name + " " + otchestv +", ваш заказ зарегестрирован. Вскоре с вами созвонится наш оператор для уточнения деталей уборки. Спасибо за заказ!";

	document.querySelector('#name').value = "";	
	document.querySelector('#surname').value = "";
	document.querySelector('#otchestvo').value = "";
	document.querySelector('#phone').value = "";
	document.querySelector('#comment').value = "";
}
	
};