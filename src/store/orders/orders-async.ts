export const sendOrderData = (id: string, order: any[]) => {
  return async () => {
    const getId = async () => {
      const response = await fetch(
        `https://ecommerce-api-d47f1-default-rtdb.firebaseio.com/users.json?orderBy="id"&equalTo="${id}"`
      );
      const data = await response.json();
      let dataBaseKey;
      for (let key in data) {
        dataBaseKey = key;
      }
      senData(dataBaseKey!);
    };

    const senData = async (id: string) => {
      const response = await fetch(
        `https://ecommerce-api-d47f1-default-rtdb.firebaseio.com/users/${id}/orders.json`,
        {
          method: "POST",
          headers: { "Content-type": "Applicaton/json" },
          body: JSON.stringify(order),
        }
      );
      if (!response.ok) {
        throw new Error("Couldn't send cart data");
      }
    };
    try {
      getId();
    } catch (error) {
      console.log(error);
    }
  };
};
