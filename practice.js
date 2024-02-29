const data= [
    {
    id:1,
    name:'neeraj',
    iscompleted:false
    },
    {
    id:2,
    name:'kanuu',
    iscompleted:false
    },
    {
    id:3,
    name:'deepak',
    iscompleted:true
    }
]

const dataa= {
    id:1,
    name:'neeraj',
    iscompleted:false
    }


const y= dataa
y.name='rawat'
console.log('y',y);


const x= {...dataa, name:'rawat'}
console.log(x)
console.log('');
console.log('');
console.log('');
console.log('');

function update(id,x)
{
    const ans= data.map((e)=>(
    e.id==id ? x: e ) )
    console.log(ans)
}

update(1,{...dataa, name:'rawat'})
const a=12;
console.log(a.toString(2));;
