const Counter=require('../models/counter')

exports.countPost = async (req, res) => {
    let id = "654dcaefdd423dc504595128"
    if (!id) {
        return res.status(400).json({ msg: "Please Select Id" });
    }

    try {
        const countStore = await Counter.findOne({ _id: id });
        if (!countStore) {
            return res.status(400).json({ msg: "CountStore not found" });
        }
        else {
            const UpdateCounter = await Counter.findByIdAndUpdate({ _id: id }, {
                count: countStore.count + 1,
            });
            return res.status(200).json({ msg: "Counter Updated Successfully", mycount:UpdateCounter.count });
        }

    } catch (error) {
        console.log("error found")
    }
};
