
var txtNama, txtTtl, txtKelamin, txtJabatan, txtEmail, txtAlamat;
var listPegawai = [];

function bodyloaded(){
txtNama = document.getElementById('txt_Nama');
txtTtl = document.getElementById('txt_Ttl');
txtKelamin = document.getElementById('txt_Kelamin');
txtJabatan = document.getElementById('txt_Jabatan');
txtEmail = document.getElementById('txt_Email');
txtAlamat = document.getElementById('txt_Alamat');

listPegawai = JSON.parse(localStorage.DATA);
}

function btnConfirm(){

	if (txtNama.value != "" && txtEmail.value!="" && txtAlamat.value !="") {
	return true;
	}else{
	alert('Anda harus mengisi data dengan lengkap !');
	}
	var newId = 1;
if (listPegawai.length > 0){
newId = listPegawai[listPegawai.length - 1].id + 1;
}

var pegawai = {
id  : newId,
nama: txtNama.value,
tempat_tanggal_lahir: txtTtl.value,
jenis_kelamin: txtKelamin.value,
jabatan: txtJabatan.value,
email: txtEmail.value,
alamat: txtAlamat.value,
};

listPegawai.push(pegawai);

localStorage.DATA = JSON.stringify(listPegawai);

alert("data berhasil masuk");
}

