// shelterController.js
//fetchShelterData 함수를 이용하여 데이터 가져옴-> getShelter 함수에서는 가져온 데이터를 응답으로 전송

const { fetchShelterData, getShelterData, getGuNmShelterData}= require('../services/shelterService');


exports.getData = async (req, res) => {
  try {
    const data = await fetchShelterData();
    res.status(200).json(data);
  } catch (error) {
    //console.error(error.message);
    //데이터 유효성 검사(validation)에 실패하여 요청이 잘못된 경우
    if (error.message.includes("Validation error")) { 
      res.status(400).json({ message: "중복된 API 요청입니다." });
      return;
    }
    res.status(500).json({ message: error.message });
  }
};

exports.getShelter = async (req, res) => {
  try {
    const data = await getShelterData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGuNmShelter = async(req, res) =>{
  const { guNm } =req.params;
  console.log(req.params);
  try{
    const data = await getGuNmShelterData(guNm);
    res.status(200).json(data);
  }catch(error){
    res.status(400).json({ message: error.message })
  }
};
