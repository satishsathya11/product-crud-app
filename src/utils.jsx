export function apiCall(payload) 
{
  return new Promise(function(resolve, reject) 
  {
    let request=new XMLHttpRequest();
    request.open("POST", "http://localhost:5000/graphql", true);
    request.setRequestHeader("Content-Type", "application/graphql");
    request.send(payload);
    console.log("Payload = " + payload);
    request.onreadystatechange = () => 
    {
      if (request.readyState === 4) 
      {
        resolve(request.responseText);
      }
    }
  })
}