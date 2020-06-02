/* eslint-disable lines-between-class-members */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Button,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';
import GlobalStyles from '../assets/globalStyles';
import { ColorCommon, GapCommon } from '../assets/publicConsts';

const Input = (props) => {
    const { onChange, value, navigation } = props;
    return (<TextInput style={styles.textInput} placeholder="请输入" value={value} onChangeText={onChange} />);
};

class Form extends React.Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
    };

    handleSubmit = () => {
        const { form } = this.props;
        form.validateFields((error, value) => {
            if (error) return;
            alert(JSON.stringify(value))
        });
    }

    render() {
        const { form } = this.props;
        const { getFieldDecorator, getFieldError, getFieldValue } = form;
        const mobileErrors = getFieldError('mobile');
        const userNameErrors = getFieldError('userName')
        return (
            <View style={GlobalStyles.container}>
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                    <ScrollView>
                        <View>
                            {getFieldDecorator('mobile', {
                                initialValue: '18550004166',
                                validateFirst: true,
                                rules: [
                                    { required: true, message: '请输入内容!' },
                                    { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码' },
                                    {
                                        validator: (rule, value, callback) => {
                                            setTimeout(() => {
                                                if (value === '15188888888') {
                                                    callback('手机号已经被注册');
                                                } else {
                                                    callback();
                                                }
                                            }, 0);
                                        }
                                    },
                                ],
                            })(
                                <Input {...this.props} />
                            )}
                            <Text style={{ color: 'red' }}>{(mobileErrors) ? mobileErrors.join(',') : null}</Text>
                        </View>

                        <View>
                            {getFieldDecorator('userName', {
                                initialValue: '张三',
                                validateFirst: true,
                                rules: [
                                    { required: true, message: '请输入内容!' },
                                    { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/, message: '请输入正确的名字' },
                                ],
                            })(
                                <Input {...this.props} />
                            )}
                            <Text style={{ color: 'red' }}>{(userNameErrors) ? userNameErrors.join(',') : null}</Text>
                        </View>

                    </ScrollView>
                    <View style={styles.productBtn}>
                        <Button
                            style={{flex: 1}}
                            color={ColorCommon.primary}
                            title="提交"
                            onPress={this.handleSubmit}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
export default createForm()(Form);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center', //
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 48,
        margin: 20,
    },
    productBtn: {
        marginBottom: 16,
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
    },
});

