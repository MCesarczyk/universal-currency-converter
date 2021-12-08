import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../../../../assets/utils/debounce';

export class DebouncedInput extends React.PureComponent {
    static propTypes = {
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        type: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        minLength: PropTypes.number,
        debounceTimeout: PropTypes.number,
        inputRef: PropTypes.func
    };

    static defaultProps = {
        element: 'input',
        className: 'input',
        type: 'text',
        value: undefined,
        minLength: 0,
        debounceTimeout: 100,
        inputRef: undefined
    };

    constructor(props) {
        super(props);

        this.isDebouncing = false;
        this.state = { value: typeof props.value === 'undefined' || props.value === null ? '' : props.value };

        const { debounceTimeout } = this.props;
        this.createNotifier(debounceTimeout);
    }

    componentDidUpdate(prevProps) {
        if (this.isDebouncing) {
            return;
        }
        const { value, debounceTimeout } = this.props;

        const { debounceTimeout: oldTimeout, value: oldValue } = prevProps;
        const { value: stateValue } = this.state;

        if (typeof value !== 'undefined' && oldValue !== value && stateValue !== value) {
            // Update state.value if new value passed via props, yep re-render should happen
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ value });
        }
        if (debounceTimeout !== oldTimeout) {
            this.createNotifier(debounceTimeout);
        }
    }

    componentWillUnmount() {
        if (this.flush) {
            this.flush();
        }
    }

    onChange = event => {
        event.persist();

        const { value: oldValue } = this.state;
        const { minLength } = this.props;

        this.setState({ value: event.target.value }, () => {
            const { value } = this.state;

            if (value.length >= minLength) {
                this.notify(event);
                return;
            }

            // If user hits backspace and goes below minLength consider it cleaning the value
            if (oldValue.length > value.length) {
                this.notify({ ...event, target: { ...event.target, value: '' } });
            }
        });
    };

    createNotifier = debounceTimeout => {
        if (debounceTimeout < 0) {
            this.notify = () => null;
        } else if (debounceTimeout === 0) {
            this.notify = this.doNotify;
        } else {
            const debouncedChangeFunc = debounce(event => {
                this.isDebouncing = false;
                this.doNotify(event);
            }, debounceTimeout);

            this.notify = event => {
                this.isDebouncing = true;
                debouncedChangeFunc(event);
            };

            this.flush = () => debouncedChangeFunc.flush();

            this.cancel = () => {
                this.isDebouncing = false;
                debouncedChangeFunc.cancel();
            };
        }
    };

    doNotify = (...args) => {
        const { onChange } = this.props;

        onChange(...args);
    };

    forceNotify = event => {
        const { debounceTimeout } = this.props;
        if (!this.isDebouncing && debounceTimeout > 0) {
            return;
        }

        if (this.cancel) {
            this.cancel();
        }

        const { value } = this.state;
        const { minLength } = this.props;

        if (value.length >= minLength) {
            this.doNotify(event);
        } else {
            this.doNotify({ ...event, target: { ...event.target, value } });
        }
    };

    render() {
        const {
            element,
            onChange: _onChange,
            value: _value,
            minLength: _minLength,
            debounceTimeout: _debounceTimeout,
            inputRef,
            ...props
        } = this.props;
        const { value } = this.state;

        return React.createElement(element, {
            ...props,
            ...inputRef,
            value,
            onChange: this.onChange,
        });
    }
}