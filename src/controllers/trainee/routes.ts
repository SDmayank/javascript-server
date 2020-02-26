import { Router } from 'express';
import { default as TraineeController } from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from './validation';
import authMiddleware from '../../libs/authMiddleware';
const traineeRouter = Router();
/**
 * @swagger
 *
 * definitions:
 *   TraineePost:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              example: string
 *          address:
 *              type: string
 *              example: string
 *          dob:
 *              type: Date
 *              example: timestamp
 *          email:
 *              type: string
 *              example: string
 *          mobileNumber:
 *              type: number
 *              example: number
 *          password:
 *              type: string
 *              example: "*******"
 *          role:
 *              type: string
 *              example: string
 *          hobbies:
 *              type: array
 *              example: array
 *
 *   TraineeResponse:
 *      type: object
 *      properties:
 *          _id:
 *              example: 5e53ac6060a36a15d89a3aa0
 *          name:
 *              type: string
 *              example: string
 *          address:
 *              type: string
 *              example: noida
 *          dob:
 *              type: Date
 *              example: Date
 *          email:
 *              type: string
 *              example: string
 *          mobileNumber:
 *              type: number
 *              example: number
 *          role:
 *              type: string
 *              example: string
 *          hobbies:
 *              type: array
 *              example: array
 *          originalId:
 *              example: string
 *          createdBy:
 *              example: string
 *          createdAt:
 *              example: timestamp
 *          v:
 *              example:0
 *          Unauthorized:
 *              type: object
 *              properties:
 *                  error:
 *                      example: Unauthorized
 *                  message:
 *                      example: Token not found
 *                  status:
 *                      example: 403
 *                  timestamp:
 *                      example: timestamp
 *
 */


traineeRouter.route('/')
/**
 * @swagger
 *
 * /trainee:
 *      get:
 *          description: Returns the list of the trainees
 *          tags:
 *             - Trainee
 *          security:
 *              - Bearer: []
 *          consumes:
 *              - application/json
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: skip
 *                description: data to be skip
 *                in: query
 *                required: false
 *                type: number
 *              - name: limit
 *                description: number of data to be shown
 *                in: query
 *                required: false
 *                type: number
 *              - name: sortBy
 *                description: data to be sort by
 *                in: query
 *                required: false
 *                type: string
 *              - name: searchName
 *                description: data to be search by
 *                in: query
 *                required: false
 *                type: string
 *              - name: searchEmail
 *                description: data to be search by
 *                in: query
 *                required: false
 *                type: string
 *          responses:
 *              200:
 *                  description: Trainee List
 *                  schema:
 *                      properties:
 *                          status:
 *                              example: Ok
 *                          message:
 *                              example: 'Trainee Listed Successfully'
 *                          count:
 *                              example: 2
 *                          data:
 *                              type: object
 *                              allOf[]:
 *                                  - $ref: '#/definitions/TraineeResponse'
 *              403:
 *                  description: unauthorised access
 *                  schema:
 *                      $ref:'#/definitions/Unauthorized'
 */


  .get(authMiddleware('getUsers', 'write'), validationHandler(validation.get), TraineeController.list)
/**
 * @swagger
 *
 * /trainee:
 *      post:
 *        description: Returns the success reponse on creation
 *        tags:
 *           - Trainee
 *        security:
 *             - Bearer: []
 *        produces:
 *          - application/json
 *        parameters:
 *          - name: User
 *            description: User's Data.
 *            in: body
 *            required: true
 *            type: object
 *            schema:
 *                $ref: '#/definitions/TraineePost'
 *        responses:
 *          200:
 *            description: Trainee create
 *            schema:
 *                 allOf[]:
 *                   properties:
 *                     status:
 *                         example: Ok
 *                     message:
 *                         example: Trainee created successfully
 *                     data:
 *                         type: object
 *                         allOf[]:
 *                            - $ref: '#/definitions/TraineeResponse'
 *                         properties:
 *                                 password:
 *                                     type: string
 *                                     example: "*****"
 *          403:
 *            description: unauthorised access
 *            schema:
 *                $ref:'#/definitions/Unauthorized'
 */
  .post(authMiddleware('getUsers', 'read'), validationHandler(validation.create), TraineeController.create)

  // .delete(authMiddleware('getUsers', 'delete'), validationHandler(validation.delete), TraineeController.delete)

/**
 * @swagger
 *
 * /trainee:
 *      put:
 *          description: Returns the success reponse on creation
 *          tags:
 *             - Trainee
 *          security:
 *              - Bearer: []
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: User
 *                description: Trainee's Data.
 *                in: body
 *                required: true
 *                type: object
 *                schema:
 *                  allOf[]:
 *                    properties:
 *                      id:
 *                        example: string
 *                dataToUpdate:
 *                  type: object
 *                  allOf[]:
 *                    - $ref: '#/definitions/TraineePost'
 *          responses:
 *              200:
 *                  description: Trainee update
 *                  schema:
 *                      allOf[]:
 *                      properties:
 *                          status:
 *                              example: Ok
 *                          message:
 *                              example: Trainee Updated successfully
 *                          data:
 *                              type: object
 *                              allOf[]:
 *                                  - $ref: '#/definitions/TraineeResponse'
 *              403:
 *                  description: unauthorised access
 *                  schema:
 *                      $ref:'#/definitions/Unauthorized'
 */
 .put(authMiddleware('getUsers', 'read'), validationHandler(validation.update), TraineeController.update);

/**
 * @swagger
 *
 * /trainee/{id}:
 *      delete:
 *          description: Returns the success reponse on creation
 *          tags:
 *             - Trainee
 *          security:
 *              - Bearer: []
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: id
 *                description: id of user to be deleted.
 *                in: path
 *                required: true
 *                type: string
 *                example: string
 *          responses:
 *              200:
 *                  description: Trainee deleted
 *                  schema:
 *                      allOf[]:
 *                          properties:
 *                              status:
 *                                  example: Ok
 *                              message:
 *                                  example: Trainee deleted successfully
 *                              data:
 *                                  example: string
 *              403:
 *                  description: unauthorised access
 *                  schema:
 *                      $ref:'#/definitions/Unauthorized'
 */
 traineeRouter.delete('/:id', authMiddleware('getUsers', 'read'), validationHandler(validation.delete), TraineeController.delete);
export default traineeRouter;
