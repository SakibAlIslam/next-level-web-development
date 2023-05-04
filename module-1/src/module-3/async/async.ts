//mocking data
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

// Promise<string> Promise<boolean> Promise<object>

const getPromiseData = async (): Promise<string> => {
  const resAsy = await makePromise();
  return resAsy;
};

//boolean...
const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const resAsy = await makePromiseBoolean();
  return resAsy;
};

//object.. with type alias
type dataType = {
  data: string;
};
// can be interface type also

const makePromiseObj = (): Promise<dataType> => {
  return new Promise<dataType>((resolve, reject) => {
    const data: dataType = {
      data: "sakib",
    };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data");
    }
  });
};

const getPromiseDataObj = async (): Promise<dataType> => {
  const resAsy = await makePromiseObj();
  return resAsy;
};

//JSON API LOADING...
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getToDo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

const getToDoData = async (): Promise<void> => {
    const result = await getToDo(); 
    console.log(result);
}

getToDoData();