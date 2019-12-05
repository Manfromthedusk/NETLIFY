var listPegawai = [];

function bodyloaded(){
  listPegawai = JSON.parse(localStorage.DATA);

  var divData = document.getElementById('divData');

  var tableHtml = "<table>";

  for(i=0;i<listPegawai.length;i++){
      tableHtml += "<tr>";
        tableHtml += "<td>" + listPegawai[i].nama + "</td>";
        tableHtml += "<td>" + listPegawai[i].tempat_tanggal_lahir + "</td>";
		tableHtml += "<td>" + listPegawai[i].jenis_kelamin + "</td>";
		tableHtml += "<td>" + listPegawai[i].jabatan + "</td>";
        tableHtml += "<td>" + listPegawai[i].email + "</td>";
        tableHtml += "<td>" + listPegawai[i].alamat + "</td>";
        tableHtml += "<td><a href='#' onclick='hapus(" + listPegawai[i].id + ")'>hapus</a></td>";
      tableHtml += "</tr>";
  }
  tableHtml += "</table>"

  divData.innerHTML = tableHtml;

}

function hapus(id){

  for(i=0;i<listPegawai.length;i++){    
    if(listPegawai[i].id == id){
      listPegawai.splice(i, 1);
      break;
    }
  }

  localStorage.DATA = JSON.stringify(listPegawai);
  bodyloaded();
}
