import './App.css';
import Customr from './components/Customer';

const Customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '길똥이',
  'birthday': '960312',
  'gender': '여자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '고무신',
  'birthday': '951128',
  'gender': '남자',
  'job': '바리스타'
}
];

function App() {
  return (
    <>
      {Customers.map(c => {
        return (
          <Customr
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender} 
            job={c.job}
            />
        );
      })}
    </>
  );
}

export default App;
