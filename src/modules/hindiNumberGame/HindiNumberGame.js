import React, { useState, useEffect, useCallback } from "react"
import { v4 as uuidv4 } from 'uuid';

import toast from 'react-hot-toast';

import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';

import { numberToWord } from "../../shared/utils/numberToWord"
import { NUMBER_LOCAL_CODE } from "../../constants/numberLocalCode"

import Input from "../../shared/components/inputs/Input";
import Button from "../../shared/components/button/Button";

import { getRandomNumberBetween } from "../../shared/utils/generateRandomNumbersBetween";
import { TOAST_CONFIG } from "../../config/toastConfig";
import RestrickTabSwitch from "../../shared/components/restrictTabSwitch/RestrictTabSwitch";

const HindiNumberGame = () => {
    const [numbers, setNumbers] = useState([]);

    const generateNumbers = () => {
        try {
            const result = [];
            for (let i = 0; i < 4; i++) {
                const dataObj = {
                    id: uuidv4(),
                    numberInNumber: getRandomNumberBetween(31, 99),
                    getNumberInHindWord: function () {
                        return numberToWord(NUMBER_LOCAL_CODE.INDIA_HINDI).convert(this.numberInNumber)
                    }
                }
                result.push(dataObj);
            }
            setNumbers(result);
        } catch (error) {
            console.log("generateNumbers Error: ", error)
        }
    }

    useEffect(() => {
        generateNumbers()
    }, []);

    // Define your validation schema
    const validationSchema = Yup.object().shape({
        numbresItem: Yup.array()
        .of(
            Yup.object().shape({
                answer: Yup.string().matches(/^\d+$/, "The field should have digits only").required("Required"),
            })
        ),
    });

    const validateAnswer = (dataObj) => {
        try {

            let numbresItem = dataObj.numbresItem;
            let result = [];
            numbresItem.forEach((element) => {

                if (parseInt(element.numberInNumber) === parseInt(element.answer)) {
                    result.push(true);
                } else {
                    result.push(false);
                }
            })
            const checker = result.every(v => v === true);

            if (checker === true) {
                answerIsCorrect()
            } else {
                answerIsInCorrect()
            }
        } catch (error) {
            console.log("validateAnswer error >>", error);
        }
    }

    const answerIsCorrect = useCallback(() => {
        toast.success("👏 Good Job!!. The Answer Is Correct.", TOAST_CONFIG);
        generateNumbers();
    }, []);

    const answerIsInCorrect = useCallback(() => {
        toast.error("👎 The Answer Is Incorrect", TOAST_CONFIG);
    }, []);

    return (
        <>  
            
            <div className="mt-20 mb-10">
                <div className="px-4 lg:px-0 xl:px-0 2xl:px-0">
                    <p className="font-semibold text-gray-400">Let's Play</p>
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-300 md:text-3xl ">Hindi - Number Game</h1>
                </div>

                <RestrickTabSwitch />

                <div className="mt-10">
                    <div className="flex flex-row justify-center items-center ">
                        {
                            numbers.map((item) => (
                                <h5 key={item.id} className="text-gray-400 text-2xl md:text-3xl lg:text-5xl px-1 lg:px-4 leading-3">
                                    {item.getNumberInHindWord()}
                                </h5>
                            ))
                        }
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={{ numbresItem: [...numbers] }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            // Handle form submission
                            validateAnswer(values);
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
                            <React.Fragment>
                                <FieldArray
                                    name="numbresItem"
                                    render={(arrayHelpers) => (
                                        <React.Fragment>
                                            <div className="grid grid-row-4 md:grid-cols-4 lg:grid-cols-4 xl-grid-cols-4 2xl:grid-cols-4 gap-3 md:gap-3 lg:gap-4 xl:gap-5 mt-10">
                                                {
                                                    values.numbresItem.map((item, index) => (
                                                        <Input
                                                            key={item.id}
                                                            id={`numberItem.${index}.answer`}
                                                            type={"tel"}
                                                            disabled={false}
                                                            label={item.getNumberInHindWord()}
                                                            value={item.number}
                                                            onChange={handleChange(`numbresItem.${index}.answer`)}
                                                            onBlur={handleBlur(`numbresItem.${index}.answer`)}
                                                            isInvalid={errors &&
                                                                errors.numbresItem &&
                                                                errors.numbresItem[index] &&
                                                                errors.numbresItem[index].answer &&
                                                                touched &&
                                                                touched.numbresItem &&
                                                                touched.numbresItem[index] &&
                                                                touched.numbresItem[index].answer
                                                            }
                                                            helperText={errors &&
                                                                errors.numbresItem &&
                                                                errors.numbresItem[index] &&
                                                                errors.numbresItem[index].answer &&
                                                                touched &&
                                                                touched.numbresItem &&
                                                                touched.numbresItem[index] &&
                                                                touched.numbresItem[index].answer &&
                                                                { content: errors.numbresItem[index].answer } &&
                                                                errors.numbresItem[index].answer}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </React.Fragment>
                                    )}
                                >
                                </FieldArray>

                                <div className="flex flex-cols justify-center mt-10">
                                    <div className="w-full sm:w-full md:w-2/6 lg:w-2/6">
                                        <Button
                                            disabled={false}
                                            label={"Submit"}
                                            outline={false}
                                            onClick={() => { handleSubmit() }}
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                        {/* <div className="grid grid-row-4 md:grid-cols-4 lg:grid-cols-4 xl-grid-cols-4 2xl:grid-cols-4 gap-3 md:gap-3 lg:gap-4 xl:gap-5 mt-10">
                        {
                            numbers.map((item) => (
                                <Input
                                    key={item.id}
                                    id={item.id}
                                    type={"tel"}
                                    disabled={false}
                                    label={item.getNumberInHindWord()}

                                />

                            ))
                        }

                    </div> */}


                    </Formik>

                </div >
            </div >
        </>

    )
}

export default HindiNumberGame