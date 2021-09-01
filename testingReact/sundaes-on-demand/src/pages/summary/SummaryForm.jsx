import react, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SummaryFrom () {
    const [tcChecked, setTcChecked] = useState(false);

    const checkboxLabel = `
        <span>
        I agree to <span style={{ color: 'blue'}}> Terms and conditions</span>
</span>
    `;

    return(
        <Form>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    checked={tcChecked}
                    onChange={e => setTcChecked(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                disabled={!tcChecked}
            >Confirm Order</Button>
        </Form>
    );
}
