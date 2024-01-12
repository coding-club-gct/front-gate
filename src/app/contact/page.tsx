import { Container, Divider } from "@mui/material";


const contactItems = [
    {
        title: 'Mail', photo: 'https://imgs.search.brave.com/cl455ETGPrDE9uVb8_T9BnmdOR54DduQlx8Odq-fjB8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2h1YmZzL1BORy1K/UEcuanBn', items: [
            {
                name: 'pavi', designation: 'executive', value: 'pavi@gmail.com',
            },
            {
                name: 'pavi', designation: 'executive', value: 'pavi@gmail.com',
            },
            {
                name: 'pavi', designation: 'executive', value: 'pavi@gmail.com',
            }
        ]
    },
    {
        title: 'Phone', photo: 'https://imgs.search.brave.com/cl455ETGPrDE9uVb8_T9BnmdOR54DduQlx8Odq-fjB8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2h1YmZzL1BORy1K/UEcuanBn', items: [
            {
                name: 'pavi', designation: 'executive', value: '123 456 7890',
            },
            {
                name: 'pavi', designation: 'executive', value: '123 456 7890',
            },
            {
                name: 'pavi', designation: 'executive', value: '123 456 7890',
            }
        ]
    }
]


export default function Page() {
    return <Container>
        <div className="flex flex-col items-center my-12">
            <p className="text-6xl max-w-[800px] text-center my-12">Get in touch with us to get more information </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, distinctio.</p>
        </div>
        <div className="flex w-full justify-center gap-4 ">
            {contactItems.map((contactItem, i) => <div key={i} className="w-1/3">
                <img src={contactItem.photo} className="w-full h-[100px] object-cover ga" ></img>

                <p className="text-3xl text-center my-4">{contactItem.title}</p>
                {contactItem.items.map((item, i) => <div key={i} className="flex flex-col gap-2 p-4  ">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-yellow">{item.designation}</p>
                    <p>{item.value}</p>
                    <Divider></Divider>
                </div>)}
            </div>)}

        </div>
    </Container>
}