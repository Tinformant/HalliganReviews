import fakeDB from "./fakeDataBase";

class fakeBackEnd {
    constructor(db) {
        this.db = db;
    }
    postDataToBackEnd(data) {
        this.db.push(data);
        // write the new data to the file fakeDataBase
        return true;
    }
    getDataFromBackEnd(cmd) {
        if (cmd.type === "data") {
          const { department, number, subnumber, semester, year } = cmd.query;
          const queryStr = (
            department +
            number +
            subnumber +
            year +
            semester
          ).toLowerCase();
          const raw = this.db.filter((x) => {
            const info = x.info;
            return (
              queryStr ===
              (
                info.department +
                info.number +
                info.subnumber +
                info.year +
                info.semester
              ).toLowerCase()
            );
          });

        } else if (cmd.type === "search") {
          const raw = this.db.filter((x) => {
            const keywordList = cmd.query.queryString.toLowerCase().split(" ");
            const keyword = new RegExp(keywordList.join("[A-za-z0–9_]*"));
            const info = x.info;
            return (info.department + info.number + info.title)
              .toLowerCase()
              .match(keyword);
          });
          return raw.map((x) => {
            return x.info;
          })
        }
        else{
            console.log("Wrong command type");
        }
    }

}

const fBE = new fakeBackEnd(fakeDB)

export default fBE;


