// Netlify server function. Set NETLIFY_ACCESS_TOKEN and NETLIFY_FORM_ID in site environment variables.
exports.handler = async () => {
 const token=process.env.NETLIFY_ACCESS_TOKEN, formId=process.env.NETLIFY_FORM_ID;
 const headers={'Content-Type':'application/json','Cache-Control':'no-store'};
 if(!token||!formId)return {statusCode:503,headers,body:JSON.stringify({error:'Not configured'})};
 try{
  const response=await fetch(`https://api.netlify.com/api/v1/forms/${encodeURIComponent(formId)}/submissions?per_page=100`,{headers:{Authorization:`Bearer ${token}`,Accept:'application/json'}});
  if(!response.ok)return {statusCode:502,headers,body:JSON.stringify({error:'Unable to load submissions'})};
  const entries=await response.json();
  const mask=name=>{const chars=Array.from(String(name||'').trim());if(!chars.length)return '익명';if(chars.length===1)return '*';if(chars.length===2)return chars[0]+'*';return chars[0]+'*'.repeat(chars.length-2)+chars.at(-1)};
  const items=entries.filter(s=>s.data?.public_display_consent==='동의').sort((a,b)=>new Date(b.created_at)-new Date(a.created_at)).slice(0,10).map(s=>({name:mask(s.data?.name),product:String(s.data?.product||'제품 상담').slice(0,30),date:new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(s.created_at))}));
  return {statusCode:200,headers,body:JSON.stringify({items})};
 }catch(e){return {statusCode:502,headers,body:JSON.stringify({error:'Fetch failed'})}}
};
