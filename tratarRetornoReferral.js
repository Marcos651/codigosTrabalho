const blip = {
  "type": "application/vnd.lime.media-link+json",
  "content": {
    "type": "application/pdf",
    "uri": "https://blipmediastore.blob.core.windows.net/secure-medias/Media_6edac4bb-7273-4423-b3b5-cb5eaffa26b31304148070448115?sv=2019-07-07&st=2023-06-01T18%3A29%3A19Z&se=2023-06-01T18%3A59%3A19Z&sr=b&sp=r&sig=ZWC0GV73NVRcWrbiO%2F4kjMpTFLfUyCnmZvaozrNZsYE%3D&secure=true"
  },
  "id": "wamid.HBgMNTU5Mjg0MDkwMDA2FQIAEhggOUVDRjlENzQ0QzQyQkY4MEU3OTQwNDMxOTI0QzQ0RkYA",
  "from": "6f04433e-fd43-485f-ad42-04e18a81e3a9@tunnel.msging.net", "to": "botagev1@msging.net",
  "metadata": {
    "#wa.timestamp": "1685645054",
    "#wa.forwarded": "true",
    "uber-trace-id": "116b2c5784d0898a%3A116b2c5784d0898a%3A0%3A1",
    "#uniqueId": "8b233a85-7836-47b8-bb27-16e89e2cc30d",
    "date_created": "1685645059613",
    "#date_processed": "1685645059656",
    "#tunnel.owner": "agetelecomrouter@msging.net",
    "#tunnel.originator": "5592984090006@wa.gw.msging.net",
    "#tunnel.originalFrom": "agetelecomrouter@msging.net/iris-hosted-4",
    "#tunnel.originalTo": "botagev1%40msging.net@tunnel.msging.net/5592984090006%40wa.gw.msging.net"
  }
}

const instagramt = {
  "headline": "AGE Telecom",
  "body": "A Age tem até 1G de velocidade e com pacotes incríveis a partir de R$89,50. Internet 100% fibra com direito a vantagens exclusivas! Só na Age Telecom!\n\nA solução completa para suas conexões. Vem viver a Conexão Age! \n\n \n#AgeTelecom #DF #Brasília #HBOmax #Deezer #tecnologia #fibraóptica #provedordeinternet #bandalarga #ftth #telecomunicação #ultravelocidade #planodeinternet #conexão #internetfibraotica #gpon #provedor #internetbandalarga #modem #internetfibra #isp #internetrapida #telecom #RA #RegiaoAdministrativa",
  "source_type": "ad",
  "source_id": "23854582074620233",
  "source_url": "https://www.instagram.com/p/Cr1Det0AL1l/"
}

const facebook = {
  "headline": "Aproveite esta oferta!", "body": "A internet mas rápida da região",
  "source_type": "ad",
  "source_id": "23853099116960233",
  "source_url": "https://fb.me/5CHfjOnkj"
}


const bot = {
  "type": "application/vnd.lime.chatstate+json",
  "content": { "state": "starting" },
  "id": "20a09433-d585-48a5-84ca-a2b3811273ce",
  "from": "5db24770-ad5d-4042-96ac-fbe804db937a@tunnel.msging.net",
  "to": "botagev1@msging.net",
  "metadata": {
    "messenger.ref": "",
    "messenger.source": "ADS",
    "messenger.type": "OPEN_THREAD",
    "messenger.ad_id": "23852265184890233",
    "uber-trace-id": "3f3ec9758ddc701b%3A3f3ec9758ddc701b%3A0%3A1",
    "#uniqueId": "0071958e-4429-4f65-b61a-f0f91f3e7301",
    "date_created": "1685101074162",
    "#date_processed": "1685101074209",
    "#tunnel.owner": "agetelecomrouter@msging.net",
    "#tunnel.originator": "5748248471909490@messenger.gw.msging.net",
    "#tunnel.originalFrom": "agetelecomrouter@msging.net/iris-hosted-1",
    "#tunnel.originalTo": "botagev1%40msging.net@tunnel.msging.net/5748248471909490%40messenger.gw.msging.net"
  }
}


const google = `{
  "type": "text/plain",
  "content": "Eve avança em fase de testes de aeronave elétrica e mira início de operaçao em 2026\nhttps://jornaldebrasilia.com.br/noticias/brasil/eve-avanca-em-fase-de-testes-de-aeronave-eletrica-e-mira-inicio-de-operacao-em-2026/\n\nCompartilhado das Notícias Locais \nhttps://play.google.com/store/apps/details?id=com.local.news.plus&referrer=utm_source%3Dnews_details",
  "id": "wamid.HBgMNTU2MTk4NTM1OTgwFQIAEhggQ0IyRUFDNTBDRkVDNTlERkUzRjA3MEQxQjJDQkQ2MUYA",
  "from": "f1a26d54-d4de-4fbc-b145-4a800d827067@tunnel.msging.net",
  "to": "botagev1@msging.net",
  "metadata": {
    "#wa.timestamp": "1685114222",
    "uber-trace-id": "7ec67b3af85a5196%3A7ec67b3af85a5196%3A0%3A1",
    "#uniqueId": "09cec734-2bd5-4b9e-aa50-c1257bc1d64c",
    "date_created": "1685114224096",
    "#date_processed": "1685114224130",
    "#tunnel.owner": "agetelecomrouter@msging.net",
    "#tunnel.originator": "5561998535980@wa.gw.msging.net",
    "#tunnel.originalFrom": "agetelecomrouter@msging.net/iris-hosted-2",
    "#tunnel.originalTo": "botagev1%40msging.net@tunnel.msging.net/5561998535980%40wa.gw.msging.net"
  }
}`



function nowUTC() {
  let offset = "-3"
  let now = new Date;
  let utc_timestamp = 1685566061382
  now = new Date(utc_timestamp + offset * 3600 * 1000);

  // Formata a data
  var dia = now.getDate();
  var mes = now.getMonth() + 1; // Mês começa do zero
  var ano = now.getFullYear();

  // Formata a hora
  var hora = now.getHours();
  var minutos = now.getMinutes();
  var segundos = now.getSeconds();

  // salva a data e a hora atual
  var horario
  return horario = "Data: " + dia + "/" + mes + "/" + ano + "\nHora: " + hora + ":" + minutos + ":" + segundos

}//console.log(nowUTC())





//  const formattedJson = JSON.stringify(JSON.parse(google), null, 2);
// console.log(formattedJson);



//  const arrayObjeto = google.split(",");
//     console.log(arrayObjeto);

// function run(google){
//     const arrayObjeto = google.split(",");
//     arrayObjeto.forEach((item) => {
//     const [chave, valor] = item.split(":");
//     return (chave.trim(), ":", valor.trim());
//   });
// }console.log(run(google))

function fun(google) {

  const arrayObjeto = google.split(",");
  arrayObjeto.forEach((item) => {
    const [chave, valor] = item.split(":");
    return console.log((chave.trim(), ":", valor.trim()))
  })

}//console.log(fun(google))


//   function fun(google) {
//     const arrayObjeto = google.split(",");

//     for (let i = 0; i < arrayObjeto.length; i++) {
//       const [customChave, customValor] = arrayObjeto[i].split(":");
//       console.log(customChave.trim(), ":", customValor.trim());
//     }
//   }

//  console.log(fun(google))

// function fun(google) {
//   var arrayObjeto = google.split(",");
//   var resultado = [];

//   for (var i = 0; i < arrayObjeto.length; i++) {
//     var item = arrayObjeto[i];
//     var keyValue = item.split(":");
//     var chave = keyValue[0].trim();
//     var valor = keyValue[1].trim();
//     resultado.push(chave + ": " + valor);
//   }

//   return resultado;
// }console.log(fun(google))


// function fun(google) {
//   const arrayObjeto = google.split(",");
//   const resultado = [];

//   for (const item of arrayObjeto) {
//     const [chave, valor] = item.split(":");
//     resultado.push(chave.trim() + ": " + valor.trim());
//   }

//   return resultado;
// }



// let obj = instagram
// if (obj.hasOwnProperty("type")) {
//   delete obj.type
// }else if(obj.hasOwnProperty(["metadata"]["#tunnel.originalTo"])){
//   delete obj["#tunnel.originalTo"]
// }else if(obj.hasOwnProperty(["metadata"]["#tunnel.originalFrom"])){
//   delete obj["#tunnel.originalFrom"]
// }else if(obj.hasOwnProperty(["#tunnel.originator"])){
//   delete obj["#tunnel.originator"]
// }else if(obj.hasOwnProperty(["#tunnel.owner"])){
//   delete obj["#tunnel.owner"]
// }else if(obj.hasOwnProperty(["#wa.forwarded"])){
//   delete obj["#wa.forwarded"]
// }else if(obj.hasOwnProperty(["from"])){
//   delete obj["from"]
// }else if(obj.hasOwnProperty(["id"])){
//   delete obj["id"]
// }else if(obj.hasOwnProperty(["uri"])){
//   delete obj["uri"]
// }else if(obj.hasOwnProperty(["content"])){
//   delete obj["content"]
// }else if(obj.hasOwnProperty(["body"])){
//   delete obj["body"]
// }else if(obj.hasOwnProperty(["source_type"])){
//   delete obj["source_type"]
// }





// function deleteProperties(obj) {
//   let propertiesToDelete = ["type", ["metadata", "#tunnel.originalTo"], ["metadata", "#tunnel.originalFrom"], "#tunnel.originator", "#tunnel.owner", "#wa.forwarded", "from", "id", "uri", "content", "body", "source_type"];

//   for (let prop of propertiesToDelete) {
//     if (isObjectPropertyPresent(obj, prop)) {
//       deleteProperty(obj, prop);
//     }
//   }

//   function isObjectPropertyPresent(obj, property) {
//     if (Array.isArray(property)) {
//       let nestedObj = obj;
//       for (let prop of property) {
//         if (!nestedObj.hasOwnProperty(prop)) {
//           return false;
//         }
//         nestedObj = nestedObj[prop];
//       }
//       return true;
//     } else {
//       return obj.hasOwnProperty(property);
//     }
//   }

//   function deleteProperty(obj, property) {
//     if (Array.isArray(property)) {
//       let nestedObj = obj;
//       let lastProp = property.pop();
//       for (let prop of property) {
//         nestedObj = nestedObj[prop];
//       }
//       delete nestedObj[lastProp];
//     } else {
//       delete obj[property];
//     }
//   }

//   let json = JSON.stringify(obj, null, 2);
//   return (json);
// }


// console.log(deleteProperties(objeto))





// function deleteProperties(obj) {
//   let propertiesToDelete = ["type",
//     ["metadata",
//       "#tunnel.originalTo"],
//     ["metadata",
//       "#tunnel.originalFrom"],
//     "#tunnel.originator",
//     "#tunnel.owner",
//     "#wa.forwarded",
//     "from",
//     "id",
//     "uri",
//     "content",
//     "body",
//     "source_type"];

//   for (let prop of propertiesToDelete) {
//     if (isObjectPropertyPresent(obj, prop)) {
//       deleteProperty(obj, prop);
//     }
//   }

//   function isObjectPropertyPresent(obj, property) {
//     if (Array.isArray(property)) {
//       let nestedObj = obj;
//       for (let prop of property) {
//         if (!nestedObj.hasOwnProperty(prop)) {
//           return false;
//         }
//         nestedObj = nestedObj[prop];
//       }
//       return true;
//     } else {
//       return obj.hasOwnProperty(property);
//     }
//   }

//   function deleteProperty(obj, property) {
//     if (Array.isArray(property)) {
//       let nestedObj = obj;
//       let lastProp = property.pop();
//       for (let prop of property) {
//         nestedObj = nestedObj[prop];
//       }
//       delete nestedObj[lastProp];
//     } else {
//       delete obj[property];
//     }
//   }

//   // Extrair as datas do objeto
//   const dateProcessed = new Date(parseInt(obj.metadata['#date_processed']));
//   const dateCreated = new Date(parseInt(obj.metadata['date_created']));
//   const timestamp = new Date(parseInt(obj.metadata['#wa.timestamp']));
//   // Formatar as datas
//   const formattedDateProcessed = formatDate(dateProcessed);
//   const formattedDateCreated = formatDate(dateCreated);
//   const formattedtimestamp = formatDate(timestamp);
//   // Função para formatar a data em dia, mês, ano, hora e minuto
//   function formatDate(date) {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     const hour = String(date.getHours()).padStart(2, '0');
//     const minute = String(date.getMinutes()).padStart(2, '0');

//     return `${day}/${month}/${year} ${hour}:${minute}`;
//   }

//   // Substituir as datas originais pelas datas formatadas
//   obj.metadata['#date_processed'] = formattedDateProcessed;
//   obj.metadata['date_created'] = formattedDateCreated;
//   obj.metadata['#wa.timestamp'] = formattedtimestamp;
//   let json = JSON.stringify(obj, null, 2);
//   return json;
// }



// console.log(deleteProperties(blip));


function deleteProperties(obj) {
  let propertiesToDelete = ["type", ["metadata", "#tunnel.originalTo"], ["metadata", "#tunnel.originalFrom"], "#tunnel.originator", "#tunnel.owner", "#wa.forwarded", "from", "id", "uri", "content", "body", "source_type"];

  for (let prop of propertiesToDelete) {
    if (isObjectPropertyPresent(obj, prop)) {
      deleteProperty(obj, prop);
    }
  }

  function isObjectPropertyPresent(obj, property) {
    if (Array.isArray(property)) {
      let nestedObj = obj;
      for (let prop of property) {
        if (!nestedObj.hasOwnProperty(prop)) {
          return false;
        }
        nestedObj = nestedObj[prop];
      }
      return true;
    } else {
      return obj.hasOwnProperty(property);
    }
  }

  function deleteProperty(obj, property) {
    if (Array.isArray(property)) {
      let nestedObj = obj;
      let lastProp = property.pop();
      for (let prop of property) {
        nestedObj = nestedObj[prop];
      }
      delete nestedObj[lastProp];
    } else {
      delete obj[property];
    }
  }

  // Verificar e tratar as datas
  if (obj.metadata && obj.metadata['#date_processed']) {
    const dateProcessed = new Date(parseInt(obj.metadata['#date_processed']));
    obj.metadata['#date_processed'] = formatDate(dateProcessed);
  }

  if (obj.metadata && obj.metadata['date_created']) {
    const dateCreated = new Date(parseInt(obj.metadata['date_created']));
    obj.metadata['date_created'] = formatDate(dateCreated);
  }

  // Função para formatar a data em dia, mês, ano, hora e minuto
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hour}:${minute}`;
  }

  let json = JSON.stringify(obj, null, 2);
  return json;
}console.log(deleteProperties(blip));


