import * as React from 'react'
import classNames from 'clsx'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import makeStyles from 'theme/makeStyles'

export const facebookColor = '#4267B2'

const useStyles = makeStyles(() => ({
  root: {
    fill: facebookColor,
  },
  body: {},
}))

export const FacebookLogo = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    const classes = useStyles(props)
    return (
      <SvgIcon
        ref={ref}
        {...props}
        className={classNames(classes.root, props.className)}
        width="245px"
        height="244px"
        viewBox="0 0 245 244">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Artboard" transform="translate(-199.000000, -117.000000)">
            <g
              id="f_logo_RGB-White_1024"
              transform="translate(199.000000, 117.000000)">
              <path
                className={classes.body}
                d="M245,122.745584 C245,54.9550197 190.154932,1.13686838e-13 122.5,1.13686838e-13 C54.8450684,1.13686838e-13 0,54.9550197 0,122.745584 C0,184.011452 44.7964795,234.791684 103.359375,244 L103.359375,158.226729 L72.2558594,158.226729 L72.2558594,122.745584 L103.359375,122.745584 L103.359375,95.7031972 C103.359375,64.9400853 121.647764,47.9474936 149.629443,47.9474936 C163.031948,47.9474936 177.050781,50.3448682 177.050781,50.3448682 L177.050781,80.5517892 L161.603818,80.5517892 C146.386304,80.5517892 141.640625,90.0135078 141.640625,99.7204779 L141.640625,122.745584 L175.615234,122.745584 L170.184082,158.226729 L141.640625,158.226729 L141.640625,244 C200.203521,234.791684 245,184.011452 245,122.745584"></path>
            </g>
          </g>
        </g>
      </SvgIcon>
    )
  },
)
export default FacebookLogo
