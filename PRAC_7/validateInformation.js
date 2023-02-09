export function validInfo(name,pwd)
{
    let usr_name=["Dhruvi","Hetvi","Prarthi","Matangi","Rina","Ram","Shyam","Hitesh"];
    let pass=["dhruvi123","hetvi123","pari123","atma123","rina123","ram123","shy123","hits123"];
    let i = 0;
    while(i<pass.length)
    {
        if(name==usr_name[i] && pwd==pass[i])
        {
            return 1;
        }
        i++;
        if(i == pass.length)
        {
            return 0;
        }
    }
}