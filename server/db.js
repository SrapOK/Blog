import mongoose from "mongoose";

const connect = () => {
  process.env.SECRET_KEY;
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  mongoose
    .connect(uri)
    .then(() => console.log("db ok"))
    .catch((err) => console.log("((", err));
};
export default connect;
